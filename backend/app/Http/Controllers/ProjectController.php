<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Buyer;
use App\Models\Bid;
use App\Models\Contest;
use Illuminate\Http\Request;
use App\Http\Requests\BuyerContestRequest;
use App\Http\Requests\BuyerProjectRequest;
use App\Http\Requests\profileRequest;
use Illuminate\Support\Facades\DB;
use Validator;

class ProjectController extends Controller
{
    function list()
    {
        $list = Buyer::get();
        return response()->json($list, 200);
    }
    
    function create(Request $req)
    {
        // $newImageName=time().'-'.$req->name.'.'.$req->contest_file->extension();
        // $test=$req->contest_file->json(move(public_path('protfolio_img'),$newImageName),200);
        $project=new Buyer;
        // $contest->contest_file=$newImageName;
        $project->project_file = $req->project_file ;
        $project->title=$req->title;
        $project->price=$req->price;
        $project->description=$req->description;
        $project->time=$req->time;
        $project->save();
        return response()->json($project, 200);
    }

    
    
    public function delete($id)
    {
        $project  = Buyer::find($id);
        $project->forceDelete();
        return response(200);
    }
   
}
