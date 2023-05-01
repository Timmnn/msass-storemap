<template>
    <div id="storemap"/>
</template>

<script>
import {StoreMap} from "../../../lib/storemap.js";

export default {
    name: "LiveDemo",
    mounted() {
        new StoreMap("#storemap", [
            {
                name: "Rains Store Hamburg, Bleichenbrücke",
                lat: 53.551980,
                lng: 9.988260,
                icon: "https://cdn.shopify.com/s/files/1/0250/8090/files/pin_2x_8881e583-3dd7-4495-bb12-e74e74107b6d.png",
                street: "Bleichenbrücke 10",
                zip: "20354",
                city: "Hamburg",
                country: "Germany",
                tel: "+49 40 35004987",
                opening_hours: "Monday 11:00-19:00<br>Tuesday 11:00-19:00<br>Wednesday 11:00-19:00<br>Thursday 11:00-19:00<br>Friday 11:00-19:00<br>Saturday 11:00-19:00<br>Sunday Closed",
            },
            {
                name: "Mein Zuhause",
                lat: 50.427290,
                lng: 8.671760,
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png",
                street: "Weiseler Str. 83i",
                zip: "35510",
                city: "Butzbach",
                country: "Germany",
                tel: "+123456789",
                opening_hours: "Monday 11:00-19:00<br>Tuesday 11:00-19:00<br>Wednesday 11:00-19:00<br>Thursday 11:00-19:00<br>Friday 11:00-19:00<br>Saturday 11:00-19:00<br>Sunday Closed",
            },
            {
                name: "Mein Zuhause",
                lat: 50.427290,
                lng: 8.673760,
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png",
                street: "Weiseler Str. 83i",
                zip: "35510",
                city: "Butzbach",
                country: "Germany",
                tel: "+123456789",
                opening_hours: "Monday 11:00-19:00<br>Tuesday 11:00-19:00<br>Wednesday 11:00-19:00<br>Thursday 11:00-19:00<br>Friday 11:00-19:00<br>Saturday 11:00-19:00<br>Sunday Closed",
            },
            {
                name: "Mein Zuhause",
                lat: 50.427290,
                lng: 8.674760,
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png",
                street: "Weiseler Str. 83i",
                zip: "35510",
                city: "Butzbach",
                country: "Germany",
                tel: "+123456789",
                opening_hours: "Monday 11:00-19:00<br>Tuesday 11:00-19:00<br>Wednesday 11:00-19:00<br>Thursday 11:00-19:00<br>Friday 11:00-19:00<br>Saturday 11:00-19:00<br>Sunday Closed",
            },
            {
                name: "Mein Zuhause",
                lat: 50.427290,
                lng: 8.675760,
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png",
                street: "Weiseler Str. 83i",
                zip: "35510",
                city: "Butzbach",
                country: "Germany",
                tel: "+123456789",
                opening_hours: "Monday 11:00-19:00<br>Tuesday 11:00-19:00<br>Wednesday 11:00-19:00<br>Thursday 11:00-19:00<br>Friday 11:00-19:00<br>Saturday 11:00-19:00<br>Sunday Closed",
            },


        ], {
            marker_popup_template: "<h3>{{name}}</h3>" +
                "<p>{{street}}</p>" +
                "<p>{{city}}, {{zip}}</p> " +
                "<div>{{opening_hours}}</div>" +
                "<a target='_blank' href='{{__directions_link}}'>Wegbeschreibung</a>" +
                "<br>" +
                "<a target='_blank' href='{{__location_link}}'>Standort</a>",/*
            sidebar_template: "<h3>{{name}} xxx</h3>" +
                "<p>{{street}}</p>" +
                "<p>{{city}}, {{zip}}</p> " +
                "<div>{{opening_hours}}</div>" +
                "<a target='_blank' href='{{__directions_link}}'>Wegbeschreibung</a>" +
                "<br>" +
                "<a target='_blank' href='{{__location_link}}'>Standort</a>",*/
            height: "1000px",
            title: "Store Locator",
        });
    }

}
</script>

<style scoped>

</style>