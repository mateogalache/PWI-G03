<template>
    <header>
    </header>
    <main>

    </main>
    <footer>
        <article class="FContainer"><!--Usamos article ya que el contnido estará relacionado, y lo queremos separar en secciones-->
            <section class="Fleft"> <!--Con el secction separamos las secciones que no interesan-->
                <h4>Contactanos</h4>
            </section>
            <section class="Fright">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3562d74-90e7-4ea1-9e9c-b32b4439764e/d6ftmoc-e174faa4-ddb3-4e24-87a4-cefac32ac521.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNTYyZDc0LTkwZTctNGVhMS05ZTljLWIzMmI0NDM5NzY0ZVwvZDZmdG1vYy1lMTc0ZmFhNC1kZGIzLTRlMjQtODdhNC1jZWZhYzMyYWM1MjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HzEiweWFXW7uCRi6DkUwDGyFaE5PGz8dJv4ogOqQrPs"
                    width="25" height="26" alt="Facebook"> 
                <img src="https://cdn.icon-icons.com/icons2/1231/PNG/512/1492693505-1-twitter_83571.png" width="25"
                    height="25" alt="Instagram">
                <img src="https://cdn.pixabay.com/photo/2021/06/25/04/20/youtube-6362801_960_720.png"
                    width="35" height="25" alt="Twitter">
                <img src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_960_720.png"
                    width="25" height="25" alt="Gmail">
            </section>
        </article>
    </footer>
</template>
<style>
.FContainer {
    display: flex;
    position: fixed;
    bottom: 0%;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--main-bg-color);
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    
}

.Fright {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    padding-right: 8%;
    


}

.Fleft {
    display: flex;
    justify-items: center;
    padding-right: 15%;
    
}

@media (min-width: 850px){
    .FContainer{
        height: 80px;
    }
    .Fright{
        position: fixed;
        width: 50%;
        right: 0px;
    }
}
</style>