<script>
const token = localStorage.getItem('accessToken');
const event_id = window.localStorage.getItem('event');
const id = localStorage.getItem('userId');
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
    
    this.getEvents();
    
  },

methods: {
getEvents(){     
      
      const response = fetch (`http://puigmal.salle.url.edu/api/v2/users/${id}/assistances/future`,{
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

          console.log(response);                 
          console.log(event_id);
          
         
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
        <div v-for="(events,date) in groupedEvents"> 
            <h2>{{ date.substring(0,10) }}</h2>
            <div v-for= "event in events" id="timeline-container">
                
                <ul class="timeline">                    
                    <li  class="timeline-item" >{{event.name}} <img  :src=  "event.image" alt="img" class="imgcal"> </li>
                    
                </ul>
            </div>
        </div>
    </main>
    <Footer2>

    </Footer2>
</template>

<style scoped>

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
.imgcal{
  margin-left:200px;
  width: 20%;
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

.timeline-item {
  color: black;
  text-shadow: 
    3px 3px 3px rgb(95 158 160);
    ;
  font-family: var(--font-family-2);
  text-align: center;
  font-size: 1.4rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-left: 8px solid rgb(95 158 160);
  border-bottom: 4px solid rgb(95 158 160);
  position: relative;
  list-style-type: none;
  --item-width: calc(100%);
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
}

</style>