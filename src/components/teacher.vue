<template>
    <div class="container_student">
        <aside>
            <div id="arriba">

            </div>

            <a href="" class="lado">Class <i class="material-icons">chevron_right</i></a>
            <a href="" class="lado">Library <i class="material-icons">chevron_right</i></a>
            <a href="" class="lado">Teachers <i class="material-icons">chevron_right</i></a>
            <a href="" class="lado">Exam <i class="material-icons">chevron_right</i></a>
            <a href="" class="lado">Transport <i class="material-icons">chevron_right</i></a>
            <a href="" class="lado">Hostel <i class="material-icons">chevron_right</i></a>



        </aside>
        <main>
            <div id="capa1">

                <a class="waves-effect waves-light btn modal-trigger orange darken-3" href="#modal3"><i
                        class="material-icons">add_to_photos</i></a>
                <router-link class="waves-effect waves-light btn  orange darken-3" to="/" id="boto">Login</router-link>


            </div>
            <div id="rol">
                <h4 id="r1">Teacher</h4>
            </div>
            <div id="letra">
                <span id="h1">Home</span>
                <i class="material-icons" id="h2">chevron_right</i>
                <span id="h3">All Students</span>
            </div>
            <div id="capa2">
                <section>
                    <div id="texto">
                        <h4 id="r1">All Students Data</h4>
                        <i class="material-icons"> more_horiz</i>

                    </div>
                    <div id="k1">
                        <div id="i1">
                            <input type="text" class="inpu" placeholder="Search by Roll...">
                        </div>
                        <div id="i1">
                            <input type="text" class="inpu" placeholder="Search by Name...">
                        </div>
                        <div id="i1">
                            <input type="text" class="inpu" placeholder="Search by Class...">
                        </div>
                        
                    </div>
                    <div id="cont-est">
                        <div id="estudiantes">

                            <table class="striped">
                                <thead>
                                    <tr>
                                        <th>Dni</th>
                                        <th>First name</th>
                                        <th>Family name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Phone_number</th>
                                        <th>Address</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="e in students">
                                        <td>{{ e.dni }}</td>
                                        <td>{{ e.first_name }}</td>
                                        <td>{{ e.family_name }}</td>
                                        <td>{{ e.Email }}</td>
                                        <td>{{ e.Age }}</td>
                                        <td>{{ e.phone_number }}</td>
                                        <td>{{ e.Address }}</td>
                                        <td>
                                            <a class="waves-effect waves-light btn modal-trigger orange darken-3"
                                                href="#modal2"> <i class="material-icons">create</i></a>
                                        </td>
                                        <td>
                                            <a class="waves-effect waves-light btn modal-trigger orange darken-3"
                                                href="#modal1"> <i class="material-icons">delete_sweep</i></a>
                                        </td>

                                        <td></td>

                                    </tr>

                                </tbody>

                                <!-- Modal eliminar producto -->
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                        <h4>DESEA ELIMINAR ESTE USUARIO?</h4>

                                    </div>
                                    <div class="modal-footer">
                                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Eliminar</a>
                                    </div>
                                </div>
                                <!-- Modal editar -->
                                <div id="modal2" class="modal">
                                    <div class="modal-content">

                                        <h4>EDITAR USUARIO</h4>

                                        <div class="input-field col s6">
                                            <input id="dni" type="text" class="validate">
                                            <label for="dni">dni</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="frist-name" type="text" class="validate">
                                            <label for="frist-name">frist-name</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="family_name " type="text" class="validate">
                                            <label for="family_name ">family_name </label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="Email" type="text" class="validate">
                                            <label for="Email">Email</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="age" type="text" class="validate">
                                            <label for="age">age</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="age" type="text" class="validate">
                                            <label for="age">age</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="phone_number" type="text" class="validate">
                                            <label for="phone_number">phone_number</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="address" type="text" class="validate">
                                            <label for="address">Address</label>

                                        </div>

                                        <div class="modal-footer">
                                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Guardar
                                                cambios</a>
                                            <a href="#!"
                                                class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal editar -->
                                <div id="modal3" class="modal">
                                    <div class="modal-content">

                                        <h4>CREAR USUARIO</h4>

                                        <div class="input-field col s6">
                                            <input id="dni" type="text" class="validate">
                                            <label for="dni">dni</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="frist-name" type="text" class="validate">
                                            <label for="frist-name">frist-name</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="family_name " type="text" class="validate">
                                            <label for="family_name ">family_name </label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="Email" type="text" class="validate">
                                            <label for="Email">Email</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="age" type="text" class="validate">
                                            <label for="age">age</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="age" type="text" class="validate">
                                            <label for="age">age</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="phone_number" type="text" class="validate">
                                            <label for="phone_number">phone_number</label>

                                        </div>
                                        <div class="input-field col s6">
                                            <input id="address" type="text" class="validate">
                                            <label for="address">Address</label>

                                        </div>

                                        <div class="modal-footer">

                                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Crear</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal eliminar producto -->
                                <div id="modal1" class="modal">
                                    <div class="modal-content">
                                        <h4>DESEA ELIMINAR ESTE USUARIO?</h4>

                                    </div>
                                    <div class="modal-footer">
                                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Eliminar</a>
                                    </div>
                                </div>
                            </table>


                        </div>
                    </div>

                    <div id="ultima">
                        <span id="previ1">Previous</span>
                        <div id="caja">
                            <span>1</span>
                        </div>
                        <div id="caja1">
                            <span>2</span>
                        </div>
                        <span id="le">Next</span>
                    </div>

                </section>

            </div>

            <footer>
                <span id="le">
                    Copyrights akkhor 2020.All rights reserved. Designed by PsdBosS
                </span>
                <a class="waves-effect waves-light btn   indigo darken-4" id="ray"><i
                        class="material-icons">keyboard_arrow_up</i></a>
            </footer>
        </main>



    </div>
</template>
<style>
@import url(/src\assets\styles\students.css);
</style>
<script>
export default {
    data() {
        return {
            students: [
                {
                    dni: "10097865",
                    first_name: "manuel",
                    family_name: "murcia",
                    Email: "manuel@gmail.com",
                    Age: "18",
                    phone_number: "3796124865",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "14623984",
                    first_name: "manolo",
                    family_name: "cruz",
                    Email: "manolo@gmail.com",
                    Age: "15",
                    phone_number: "3974612598",
                    Address: "cra15 oeste 80 4 13"
                },
                {
                    dni: "15472389",
                    first_name: "camilo",
                    family_name: "segura",
                    Email: "camilo@gmail.com",
                    Age: "23",
                    phone_number: "3792856415",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "17524951",
                    first_name: "lina",
                    family_name: "peña",
                    Email: "lina@gmail.com",
                    Age: "34",
                    phone_number: "3791642567",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "13569815",
                    first_name: "veronica",
                    family_name: "echeverry",
                    Email: "veronica@gmail.com",
                    Age: "43",
                    phone_number: "3852164795",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "15946287",
                    first_name: "fernando",
                    family_name: "fernandez",
                    Email: "fernando@gmail.com",
                    Age: "24",
                    phone_number: "369754129",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "17894562",
                    first_name: "federico",
                    family_name: "vargas",
                    Email: "federico@gmail.com",
                    Age: "14",
                    phone_number: "3125469875",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "18264597",
                    first_name: "agustin",
                    family_name: "codasis",
                    Email: "agustin@gmail.com",
                    Age: "17",
                    phone_number: "345698712",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "15947361",
                    first_name: "carmenza",
                    family_name: "quiroz",
                    Email: "carmenza@gmail.com",
                    Age: "19",
                    phone_number: "3741258965",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "136951476",
                    first_name: "maria",
                    family_name: "palomino",
                    Email: "maria@gmail.com",
                    Age: "16",
                    phone_number: "3569874126",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "19742365",
                    first_name: "yeraldin",
                    family_name: "omen",
                    Email: "yeraldin@gmail.com",
                    Age: "26",
                    phone_number: "3698521475",
                    Address: "cra45 este 80 4 13"
                },
                {
                    dni: "15963149",
                    first_name: "pedro",
                    family_name: "hernandez",
                    Email: "pedro@gmail.com",
                    Age: "11",
                    phone_number: "3214569872",
                    Address: "cra45 este 80 4 13"
                },
            ],
        }
    },
    mounted() {
        M.AutoInit();
    }
}

</script>