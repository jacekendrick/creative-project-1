<template>
  <div class='signup'>
    <div class='signup-header'>
        <div class='section-header'>
        Sign up now!
        </div>
        <div class='section-sub-header'>
        Be one of the first to know when HomeBase is released
        </div>
    </div>
    <div class='signup-input'>
        <form v-on:submit.prevent="addPerson">
          <fieldset>
            <input v-model="addEmail" placeholder="youremail@mail.com"/>
            <input v-model="addName" placeholder="First Name"/>
            <input v-model="addHomeTown" placeholder="Hometown"/>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
    </div>
    <div class='release-date'>
        <span style="font-size: 24px; font-weight: bold; color: #36454f;">
        <!-- <i class="fas fa-calendar-alt"></i> -->
        Come join the family:
        </span>
    </div>
    <SignUpList :list="this.$root.$data.personList" />
  </div>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
  border: 2px solid #36454f;
  background-color: #f2f2f2;
  border-radius: 20px;
  max-width: 500px;
  padding: 16px;	
  vertical-align: center;
}

button {
  margin: auto;
}

input {
  margin: 10px;
}

</style>

<script>
import SignUpList from "../components/SignUpList.vue";
import moment from 'moment';

export default {
  name: "SignUp",
  components: {
    SignUpList
  },
  data() {
    return {
      addID: 5,
      addEmail: '',
      addName: '',
      addHomeTown: '',
    }
  },
  methods: {
    addPerson() {
      let newPerson = {
        id: this.addID,
        name: this.addName,
        email: this.addEmail,
        hometown: this.addHomeTown,
        signupdate: moment().format('MMMM Do')
      };
      if (this.addName, this.addEmail, this.addHomeTown) {
        this.$root.$data.personList.push(newPerson);
        this.resetData();
      }
      else {
        alert('Must fill out entire form');
      }
    },
    resetData() {
      this.addID += 1;
      this.addName = '';
      this.addEmail = '';
      this.addHomeTown = '';
    }
  }
}
</script>
