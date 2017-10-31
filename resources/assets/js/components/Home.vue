<template>
	<div> 
	<nav class="panel column is-offset-2 is-8">
  <p class="panel-heading">
    Phone Book
  </p>
  <div class="panel-block">

    <button class="button is-link is-outlined is-fullwidth">
      Add Contact
    </button>
    

    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </p>
  </div>
 
  <a class="panel-block" :class="addActive">
   <span class="column is-9">
   	 Contact
   </span>
   
     <span class="column is-1">
      <i class="has-text-danger fa fa-trash"></i>
    </span>
    <span class="column is-1">
      <i class="has-text-primary fa fa-edit"></i>
    </span>
    <span class="column is-1">
      <i class="has-text-info fa fa-eye"></i>
    </span>
  </a>
  
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth" @click="openAdd">
      Add Contact
    </button>
    <Add :openmodal='addActive' @closerequest="closeAdd"> </Add>
  </div>
</nav>



</div>
</template>
<script>
	let Add = require('./Add.vue');
	export default{
		data(){
			return{
				addActive:'',
				
			}
		},
		components: {Add},
		methods: {
			openAdd()
			{
				this.addActive = "is-active"
			},
			closeAdd()
			{

				this.addActive = ""
			}
		}

	}
</script>