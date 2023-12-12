<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ObjectStorageTrait
{
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
