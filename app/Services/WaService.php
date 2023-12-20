<php?

use App\Contract\IWaService;
use App\Services\WhatsApp\TwillioAdapter

class WaService implements IWaService
{
    protected $waAppService;

    public function __construct()
    {
        $this->waAppService = new TwillioAdapter();
    }

    public function sendTextMessage($phone, $data)
    {
        $this->waAppService->sendTextMessage($phone, $data);
    }

    public function sendImageMessage($phone, $data)
    {
        $this->waAppService->sendImageMessage($phone, $data);
    }

    public function sendVideoMessage($phone, $data)
    {
        $this->waAppService->sendVideoMessage($phone, $data);
    }

    public function sendAudioMessage($phone, $data)
    {
        $this->waAppService->sendAudioMessage($phone, $data);
    }

}