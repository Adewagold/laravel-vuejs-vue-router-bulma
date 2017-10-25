<!DOCTYPE html>
<html>
<head>
	<title></title>
<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body>
<div id="app">
	<div class="container">
	<Myheader>	</Myheader>
	<router-view></router-view>
	<Myfooter> </Myfooter>	
	</div>
	<Add>	</Add>
	
	<p v-text="page_title"></p>
</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>