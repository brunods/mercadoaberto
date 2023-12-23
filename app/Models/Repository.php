<php? 

namespace App\Repositories;


class Repository : IRepository
{
    public function getWaResponseInstance()
    {
        return new WaResponse();
    }
}
