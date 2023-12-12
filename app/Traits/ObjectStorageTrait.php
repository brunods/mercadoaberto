<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ObjectStorageTrait
{
    public function getLinkToUploadImage($imageType, $imageExtension, $userId, $bucket)
    {
        $disk = Storage::disk($bucket);
        $filename = strtolower($imageType).'/'.$userId.'_'.time().'.'.$imageExtension;

        $disk->put($filename, '');
        $link = $disk->temporaryUrl($filename, now()->addMinutes(5));

        return [
            'filename' => $filename,
            'link' => $link,
        ];
    }

    public function createPresignedGetUrl($filename, $bucket)
    {
        $disk = Storage::disk($bucket);
        $link = $disk->temporaryUrl($filename, now()->addMinutes(5));

        return $link;
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
