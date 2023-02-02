<template>
    <div class="container-scroller">
    <div class="page-body-wrapper full-page-wrapper">
      <div class="content-wrapper align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-8 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <!-- <img src="../../images/logo.svg" alt="logo"> -->
                <h1 class="text-primary fw-bold bg-warning text-dark">Add New Books</h1>
              </div>
              <form class="pt-3" enctype="multipart/form-data">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="title" id="exampleInputTitle" placeholder="Enter title">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="author" id="exampleInputAuthor" placeholder="Enter author name">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="genre" id="exampleInputGenre" placeholder="Enter genre">
                </div>
                <div class="form-group">
                  <input type="textarea" class="form-control form-control-lg" v-model="description" id="exampleInputDescription" placeholder="Enter Descriptions">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="isbn" id="exampleInputIsbn" placeholder="Enter Isbn">
                </div>                
                <div class="form-group">
                  <input type="date" class="form-control form-control-lg" v-model="published" id="exampleInputPublished" placeholder="Select Published Date">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="publisher" id="exampleInputPublisher" placeholder="Enter Publisher Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" v-model="image" id="exampleInputPublisher" placeholder="Enter Image Name">
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" v-on:click="updateBook">Update</a>
                </div>
                <div class="text-center mt-4 fw-light">
                  <router-link to="/admin/books" class="text-primary">All Books</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="popupModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-body bg-success text-white fw-bold">
            <p class="text-center" id="msg"></p>
        </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default ({
    name:'EditBook',
    data(){
        return{
            title : '',
            author: '',
            genre: '',
            description:'',
            isbn:'',
            published: '',
            publisher: '',
            image: ''
        }
    },
    async mounted(){
        console.log(this.$route.params.id);
        let result = await axios.get("api/admin/store-books/"+this.$route.params.id);
        this.title = result.data.data.title;
        this.author = result.data.data.author;
        this.genre = result.data.data.genre;
        this.description = result.data.data.description;
        this.isbn = result.data.data.isbn;
        this.published = result.data.data.published;
        this.publisher = result.data.data.publisher;
        this.image = result.data.data.image;
    },
    methods:{
        async updateBook(){
            let result = await axios.post("api/admin/store-books/"+this.$route.params.id,{
                title:this.title,
                author:this.author,
                genre:this.genre,
                description:this.description,
                isgn:this.isbn,
                published: this.published,
                publisher: this.publisher,
                image: this.image
            });
            if(result != ""){
                $('#msg').text(result.data.message);
                $('#popupModal').show();

                setTimeout(function() {
                    $('#popupModal').hide();
                }, 3000);
            }
        }
    }
})
</script>
