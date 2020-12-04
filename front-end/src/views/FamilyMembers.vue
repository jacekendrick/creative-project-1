<template>
  <div class='signup'>
    <div class='signup-header'>
        <div class='section-sub-header'>
        Add family members below
        </div>
    </div>
    <div class='signup-input'>
        <form v-on:submit.prevent="addFamilyMember">
          <fieldset>
            <input v-model="addFirstName" placeholder="First Name (Ex: Michael)"/>
            <input v-model="addLastName" placeholder="Last Name (Ex: Jordan)"/>
            <input v-model="addRelationship" placeholder="Relation (Ex: dad)"/>
            <input v-model="addAge" placeholder="Age (Ex: 45)"/>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
    </div>
    <div>
      <table class="famTable">
        <tr>
          <th>Name</th>
          <th>Relationship</th>
          <th>Age</th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="person in this.familyMembers" :key="person._id">
          <td>{{person.firstName}} {{person.lastName}}</td>
          <td>{{person.relationship}}</td>
          <td>{{person.age}}</td>
          <td><button v-on:click="promptAge(person)">Edit</button></td>
          <td><button v-on:click="deleteMember(person)">Delete</button></td>
        </tr>
      </table>
    </div>
    
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

.famTable button {
  margin: auto;
  background-color: #084c61;
    height: 35px;
    margin: auto;
    text-align: center;
    font-size: 15px;
    width: 60px;
    border-radius: 10px;
    margin-left: 5px;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
}

input {
  margin: 10px;
}

.famTable tr:nth-child(even){background-color: #f2f2f2;}

.famTable tr:hover {background-color: #ddd;}

.famTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  height: 50px;
  text-align: left;
  background-color: #084c61;
  color: white;
}

.famTable td, .famTable th {
  padding: 8px;
}

.famTable {
  margin-top: 50px;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 10px;

}


</style>

<script>
import axios from 'axios';

export default {
  name: "FamilyMembers",
  data() {
    return {
      addID: 0, 
      addFirstName: '',
      addLastName: '',
      addRelationship: '',
      addAge: '',
      findMember: null,
      familyMembers: [],
      newMember: {}
    }
  },
  created() {
    this.getFamilyMembers();
  },
  methods: {
    async addFamilyMember() {
      if (this.addFirstName, this.addLastName, this.addRelationship, this.addAge) {
        let newFam = await axios.post('/api/familymembers', {
          firstName: this.addFirstName,
          lastName: this.addLastName,
          relationship: this.addRelationship,
          age: this.addAge,
        });
        this.resetData();
        this.newMember = newFam;
      }
      else {
        alert('Must fill out entire form');
      }
    },
    promptAge(person) {
      let newAge = prompt("Enter the new age: ");
      this.editFamilyMember(person, newAge);
    },
    async editFamilyMember(familyMember, newAge) {
      try {
        await axios.put("/api/familymembers/" + familyMember._id, {
          age: newAge,
        });
        this.findMember = null;
        this.getFamilyMembers();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getFamilyMembers() {
      try {
        let response = await axios.get('/api/familymembers');
        this.familyMembers = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMember(member) {
      try {
        await axios.delete("/api/familymembers/" + member._id);
        this.getFamilyMembers();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    resetData() {
      this.addID += 1;
      this.addFirstName = '';
      this.addLastName = '';
      this.addRelationship = '';
      this.addAge = '';
      this.getFamilyMembers();
    }
  }
}
</script>
