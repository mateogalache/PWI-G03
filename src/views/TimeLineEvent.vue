<script>
const token = localStorage.getItem('accessToken');
const event_id = window.localStorage.getItem('event');
const id = localStorage.getItem('userId');
const email = localStorage.getItem('email');
export default {
  name: "App",
  computed:{
    groupedEvents() {
        const dataArray = Object.values(this.data);
      // Group the events by date
      return dataArray.reduce((acc, event) => {
        const date = event.eventStart_date;
        
       
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(event);
        
        
        return acc;
      }, {});
    },
   },
  data() {
    return {
      data: {},
      data2: {},
      editing: false,
      savedId: null,
      showPart: false,
      response: null,
      participating: false,
      location: '',
      npart: '',
      type:'',
      name:'',
      endDate: '',
      startDate:'',
      description: '',
      image: '',
    }
  },
  beforeMount(){
    this.getUser(); 
  },

methods: {
  async getUser() {
    const response = await fetch(`http://puigmal.salle.url.edu/api/v2/users/search?s=${email}`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })

      .then(response => response.json())
      .then(data => this.data2 = data);


    localStorage.setItem('userId', this.data2[0].id);
    this.getEvents();
    

  },
  async getEvents(){     
      
      const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/${this.data2[0].id}/assistances/future`,{
        method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
          },
      })
          
          .then(response => response.json())
          .then(data => {
                    data.sort((a,b) =>{
                        const dateA = new Date(a.eventStart_date);
                        const dateB = new Date(b.eventStart_date);
                        return dateA - dateB;
                    });
                    this.data = data;
                });  
         
  },
  //Función para guardar en el LocalStorage el id del evento en el que hemos clickado
  saveEvent(id){
        this.savedId = id; //Le pasamos como parametro el id del evento y lo guardamos en la variable 'saveId' que luego la guardamos en el LocalStorage
        window.localStorage.setItem('event',this.savedId);
        console.log(id);
  },
}
};
</script>
<script setup>
import Footer2 from '../components/Footer2.vue'
import Header2 from '../components/Header2.vue'

</script>
<template>

    <Header2>
        
    </Header2>
<!--Pagina para ver el calendario de eventos-->
    <main >
      
        <h1>Calendario</h1>
        <div class="groupcenter">
          <div v-for="(events,date) in groupedEvents" class="groupevents">
            <div class="line"></div>
              <h3>{{ date.substring(0,10) }}</h3>
              <a href="Event"><div v-for= "event in events" id="timeline-container" v-on:click="saveEvent(event.id)">                                    
                <div  class="timeline-item" >
                  <b>{{event.name}} </b>
                  <img  :src=  "event.image" alt="img" class="imgcal"> 
                </div>            
              </div></a>
          </div>
        </div>
        
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>

h3{
  margin-left: -3rem;
}
.groupcenter{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a{
  text-decoration: none;
  color: black;
}

h1{
  margin-left: 1rem;
}

.imgcal{
  position: relative;
  width: 8rem;
  height: 6rem;
  object-fit: cover;
  border: 1px solid var(--main-bg-color);
  background: linear-gradient(white,var(--main-bg-color));
}
.imgcal:after{
  width: 80%;
  content: 'NO IMAGE';
  position: absolute;
  top: 50%;
  left: 57%;
  transform: translate(-50%,-50%);
}
.timeline-item{
  display: flex;
  justify-content: center;
  margin-left: 5rem;
  margin-top: -3rem;
  flex-direction: column;
  gap: .5rem;
  width: 10rem;
}

.groupevents:last-child .line{
  height: 40%;
}
.line{
  position: absolute;
  left: 35%;
  width: .3rem;
  height: 100%;
  background: var(--main-bg-color);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

/* TIMELINE */
#timeline-container {
  background: white;
  background: linear-gradient(
    171deg,
    
    
  );
  overflow: auto;
  padding: 60px 0;

  
    
  
}


.timeline {
  margin: 0 auto;
  position: relative;
  left: 120px;
  width: 80%;
  max-width: 900px;
  margin-top: 16px;
  margin-left: 5%;
}


  

  
 


.cont{

    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    
}
.calendar{
    width: 100%;
    height: 100%;
}

@Media (min-width: 1080px){
    h2{
        font-size: 40px;
    }
    
    
    h3{
      margin-left: 5rem;
    }
    .timeline-item{
      margin-left: 15rem;
    }
    
    .line{
      left: 50%;
      
    }
}

</style>