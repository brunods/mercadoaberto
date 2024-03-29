<?php

use App\Events\UserNotification;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WaController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('pedido')->group(function () {
    Route::get('/rastreio', [OrderController::class, 'tracking'])->name('order.tracking');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::group(['prefix' => '/products'], function () {
        Route::get('/', [ProductController::class, 'index'])->name('products');
        Route::get('/create', [ProductController::class, 'create'])->name('products.create');
        Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
        Route::post('/', [ProductController::class, 'store'])->name('products.store');
        Route::put('/{product}', [ProductController::class, 'update'])->name('products.update');
        Route::delete('/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
    });

    Route::group(['prefix' => '/clients'], function () {
        Route::get('/', [ClientController::class, 'index'])->name('clients');
        Route::get('/create', [ClientController::class, 'create'])->name('clients.create');
        Route::get('/{client}/edit', [ClientController::class, 'edit'])->name('clients.edit');
        Route::post('/', [ClientController::class, 'store'])->name('clients.store');
        Route::put('/{client}', [ClientController::class, 'update'])->name('clients.update');
        Route::delete('/{client}', [ClientController::class, 'destroy'])->name('clients.destroy');
    });

    Route::group(['prefix' => 'wa-service'], function () {
        Route::post('send-text', [WaController::class, 'sendTextMessage']);
        Route::post('send-image', [WaController::class, 'sendImageMessage']);
        Route::post('send-video', [WaController::class, 'sendVideoMessage']);
        Route::post('send-audio', [WaController::class, 'sendAudioMessage']);
    });

});

Route::get('/send-notification/{user}', function (User $user) {
    event(new UserNotification($user));
});

require __DIR__.'/auth.php';
