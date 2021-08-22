<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Bidlist Details</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
	<center>
	<div class="card" style="width: 18rem;" class="col-md-4" >
  <iframe class="card-img-top" src="{{('/protfolio_img/'.$project['project_file'])}}" alt="Card image cap"></iframe>
  <div class="card-body">
    <h2 class="card-title">{{$project['title']}}</h2>
    <p class="card-text">{{$project['description']}}</p>
    <p class="card-text"><h5>Time:</h5>{{$project['time']}}</p>
    <p class="card-text"><h5>Price:</h5>{{$project['price']}}</p>
    <a class="btn btn-outline-success btn-sm"  href="{{url('/download',$project['project_file'])}}">Project Download</a>
    </div>
</div>
</center>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>