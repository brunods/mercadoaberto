<?php

namespace App\Traits;

use Aws\Credentials\Credentials;
use Aws\S3\S3Client;
use Illuminate\Support\Facades\Storage;

trait ObjectStorageTrait
{
    private $s3;

    public function __construct()
    {
        $access_key_id = env('R2_ACCESS_KEY');
        $access_key_secret = env('R2_SECRET_KEY');
        $endpoint = env('R2_ENDPOINT');
        $credentials = new Credentials($access_key_id, $access_key_secret);

        $options = [
            'region' => 'us-east-1',
            'endpoint' => $endpoint,
            'version' => 'latest',
            'credentials' => $credentials,
        ];

        $this->s3 = new S3Client($options);
    }

    public function getLinkToUploadImage($imageType, $imageExtension, $folder, $userId, $bucket)
    {
        $filename = strtolower($folder).'/'.$userId.'_'.time().'.'.$imageExtension;

        $presignedUrl = $this->createPresignedUrl($filename, $bucket, 'PutObject');

        return [
            'url' => $presignedUrl,
        ];
    }

    public function getImage($filename, $bucket)
    {
        $presignedUrl = $this->createPresignedUrl($filename, $bucket, 'GetObject');

        return [
            'url' => $presignedUrl,
        ];
    }

    public function createPresignedUrl($filename, $bucket, $operation)
    {
        $cmd = $this->s3->getCommand($operation, [
            'Bucket' => $bucket,
            'Key' => $filename,
        ]);

        $request = $this->s3->createPresignedRequest($cmd, '+1 hour');

        return (string) $request->getUri();
    }

    public function deleteFile($filename, $bucket)
    {
        $disk = Storage::disk($bucket);
        if ($disk->exists($filename)) {
            $disk->delete($filename);

            return true;
        }

        return false;
    }
}
