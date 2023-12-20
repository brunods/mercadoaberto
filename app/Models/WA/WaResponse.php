<php? 

namespace App\Models\WA;

class WaResponse
{
    public $id;
    public $name;
    public $description;
    public $status;
    public $created_at;
    public $updated_at;

    public function __construct($id, $name, $description, $status, $created_at, $updated_at)
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->status = $status;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }
}
