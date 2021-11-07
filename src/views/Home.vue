<template>
  <div class="container-fluid">
    <div class="container-xl" style="border: 1px solid red">
      <div class="row py-3 align-items-center justify-content-between" style="border: 1px solid red">
        <div class="col-5" style="border: 1px solid green">
          <img src="../assets/images/logo.svg" class="img-fluid" v-once>
        </div>
        <div class="col-5" style="border: 1px solid green">
          <b-button variant="outline-secondary">Try it free</b-button>
        </div>
      </div>
      <div class="row">
        <div class="col p-4">
          <div class="row mt-5">
            <h4 class="text-center w-100">Build the Community your fans Will Love</h4>
          </div>
          <div class="row">
            <p class="text-center text-info my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus magni labore a dolore ullam deserunt corporis, saepe cumque expedita officiis laudantium provident ea ad perspiciatis aliquid commodi. Sit, consequuntur optio.</p>
          </div>

          <div class="row justify-content-center my-4">
            <b-button variant="success">Get Started For Free</b-button>
          </div>

          <div class="row my-5">
            <img src="../assets/images/screen-mockups.svg" class="img-fluid" v-once>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>