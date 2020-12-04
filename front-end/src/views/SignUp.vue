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
            <input v-model="addFirstName" placeholder="First Name"/>
            <input v-model="addLastName" placeholder="Last Name"/>
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
    <SignUpList :list="this.signups" />
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
import axios from 'axios';

export default {
  name: "SignUp",
  components: {
    SignUpList
  },
  data() {
    return {
      addID: 0, 
      addEmail: '',
      addFirstName: '',
      addLastName: '',
      addHomeTown: '',
      signups: [],
      newSignup: {}
    }
  },
  created() {
    this.getSignups();
  },
  methods: {
    async addPerson() {
      if (this.addFirstName, this.addLastName, this.addEmail, this.addHomeTown) {
        let newSignup = await axios.post('/api/signup', {
          firstName: this.addFirstName,
          lastName: this.addLastName,
          email: this.addEmail,
          hometown: this.addHomeTown,
          date: moment().format('MMMM Do')
        });
        this.resetData();
        this.newSignup = newSignup;
      }
      else {
        alert('Must fill out entire form');
      }
    },
    async getSignups() {
      try {
        let response = await axios.get('/api/signup');
        this.signups = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    resetData() {
      this.addID += 1;
      this.addFirstName = '';
      this.addLastName = '';
      this.addEmail = '';
      this.addHomeTown = '';
      this.getSignups();
    }
  }
}
</script>
