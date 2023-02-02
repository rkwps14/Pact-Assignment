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
                  <input type="text" class="form-control form-control-lg" v-model="title" id="exampleInputTitle" placeholder="Enter title" required>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="author" id="exampleInputAuthor" placeholder="Enter author name" required>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="genre" id="exampleInputGenre" placeholder="Enter genre" required>
                </div>
                <div class="form-group">
                  <input type="textarea" class="form-control form-control-lg" v-model="description" id="exampleInputDescription" placeholder="Enter Descriptions" required>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="isbn" id="exampleInputIsbn" placeholder="Enter Isbn" required>
                </div>                
                <div class="form-group">
                  <input type="date" class="form-control form-control-lg" v-model="published" id="exampleInputPublished" placeholder="Select Published Date" required>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="publisher" id="exampleInputPublisher" placeholder="Enter Publisher Name" required>
                </div>
                <div class="form-group">
                    <input type="file" class="form-control form-control-lg" v-on:change="imageUpload" id="exampleInputImage" required>
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" v-on:click="addBook">Sign up</a>
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
import { ref } from "vue";

export default {
    name:'AddBook',
    
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
    methods:{
          imageUpload(event){
            this.image = event.target.files[0];
          },
          async addBook(){
            
            if(this.title == ""){
              $('#exampleInputTitle').focus();
              $('#exampleInputTitle').css('border-color', 'red');
              $('#exampleInputTitle').val('');
              $('#exampleInputTitle').attr("placeholder", "Please Enter Title");
              return false;
            }else{
              $('#exampleInputTitle').css('border-color', "#e1dfdf");
            }

            if(this.author == ""){
              $('#exampleInputAuthor').focus();
              $('#exampleInputAuthor').css('border-color', 'red');
              $('#exampleInputAuthor').attr("placeholder", "Please Enter Author");
              return false;
            }else{
              $('#exampleInputAuthor').css('border-color', "#e1dfdf");
            }

            if(this.genre == ""){
              $('#exampleInputGenre').focus();
              $('#exampleInputGenre').css('border-color', 'red');
              $('#exampleInputGenre').attr("placeholder", "Please Enter Genre");
              return false;
            }else{
              $('#exampleInputGenre').css('border-color', "#e1dfdf");
            }

            if(this.description == ""){
              $('#exampleInputDescription').focus();
              $('#exampleInputDescription').css('border-color', 'red');
              $('#exampleInputDescription').attr("placeholder", "Please Enter Description");
              return false;
            }else{
              $('#exampleInputDescription').css('border-color', "#e1dfdf");
            }

            if(this.isbn == ""){
              $('#exampleInputIsbn').focus();
              $('#exampleInputIsbn').css('border-color', 'red');
              $('#exampleInputIsbn').attr("placeholder", "Please Enter ISBN");
              return false;
            }else{
              $('#exampleInputIsbn').css('border-color', "#e1dfdf");
            }

            if(this.published == ""){
              $('#exampleInputPublished').focus();
              $('#exampleInputPublished').css('border-color', 'red');
              $('#exampleInputPublished').attr("placeholder", "Please Enter Published");
              return false;
            }else{
              $('#exampleInputPublished').css('border-color', "#e1dfdf");
            }

            if(this.publisher == ""){
              $('#exampleInputPublisher').focus();
              $('#exampleInputPublisher').css('border-color', 'red');
              $('#exampleInputPublisher').attr("placeholder", "Please Enter Published");
              return false;
            }else{
              $('#exampleInputPublisher').css('border-color', "#e1dfdf");
            }
            

            if(this.image == ""){
              $('#exampleInputImage').focus();
              $('#exampleInputImage').css('border-color', 'red');
              // $('#exampleInputImage').attr("placeholder", "Please Select Image");
              return false;
            }else{
              $('#exampleInputImage').css('border-color', "#e1dfdf");
            }



            const fd = new FormData();
            fd.append('image',this.image,this.image.name);

            let result = await axios.post("api/admin/store-books",{
                title:this.title,
                author:this.author,
                genre:this.genre,
                description:this.description,
                isbn:this.isbn,
                published: this.published,
                publisher: this.publisher,
                image:this.image.name
            });
            console.log(fd);
            if(result != ""){
                $('#msg').text(result.data.message);
                $('#popupModal').show();

                setTimeout(function() {
                    $('#popupModal').hide();
                }, 3000);

                this.title = '',
                this.author='',
                this.genre='',
                this.description='',
                this.isbn='',
                this.published='',
                this.publisher='',
                this.image.valueOf=''

            }
        }
    }
}
</script>