document.write('<h2>Estadisticas Centro Medico Ñuñoa</h2>');

//Variables y sus respectivos array de objetos

var Radiologia = [
    {hora:"11:00", especialista:"IGNACIO SCHULZ", paciente:"FRANCISCA ROJAS", rut:"9.878.782-1", prevision:"FONASA"},
    {hora:"11:30", especialista:"FEDERICO SUBERCASEAUX", paciente:"PAMELA ESTRADA", rut:"15.345.241-3", prevision:"ISAPRE"},
    {hora:"15:00", especialista:"FERNANDO WURTHZ", paciente:"ARMANDO LUNA", rut:"16.445.345-9", prevision:"ISAPRE"},
    {hora:"15:30", especialista:"ANA MARIA GODOY", paciente:"MANUEL GODOY", rut:"17.666.419-0", prevision:"FONASA"},
    {hora:"16:00", especialista:"PATRICIA SUAZO", paciente:"RAMON ULLOA", rut:"14.989.389-K", prevision:"FONASA"}
]

var Traumatologia = [
    {hora:"8:00", especialista:"MARIA PAZ ALTUZARRA", paciente:"PAULA SANCHEZ", rut:"15.554.774-5", prevision:"FONASA"},
    {hora:"10:00", especialista:"RAUL ARAYA", paciente:"ANGÉLICA NAVAS", rut:"15.444.147-9", prevision:"ISAPRE"},
    {hora:"10:30", especialista:"MARIA ARRIAGADA", paciente:"ANA KLAPP", rut:"17.879.423-9", prevision:"ISAPRE"},
    {hora:"11:00", especialista:"ALEJANDRO BADILLA", paciente:"FELIPE MARDONES", rut:"1.547.423-6", prevision:"ISAPRE"},
    {hora:"11:30", especialista:"CECILIA BUDNIK", paciente:"DIEGO MARRE", rut:"16.554.741-K", prevision:"FONASA"},
    {hora:"12:00", especialista:"ARTURO CAVAGNARO", paciente:"CECILIA MENDEZ", rut:"9.747.535-8", prevision:"ISAPRE"},
    {hora:"12:30", especialista:"ANDRES KANACRI", paciente:"MARCIAL SUAZO", rut:"11.254.785-5", prevision:"ISAPRE"}
]

var Dental = [
    {hora:"8:30", especialista:"ANDREA ZUÑIGA", paciente:"MARCELA RETAMAL", rut:"11.123.425-6", prevision:"ISAPRE"},
    {hora:"11:00", especialista:"MARIA PIA ZAÑARTU", paciente:"ANGEL MUÑOZ", rut:"9.878.789-2", prevision:"ISAPRE"},
    {hora:"11:30", especialista:"SCARLETT WITTING", paciente:"MARIO KAST", rut:"7.998.789-5", prevision:"FONASA"},
    {hora:"13:00", especialista:"FRANCISCO VON TEUBER", paciente:"KARIN FERNANDEZ", rut:"18.887.662-K", prevision:"FONASA"},
    {hora:"13:30", especialista:"EDUARDO VIÑUELA", paciente:"HUGO SANCHEZ", rut:"17.665.461-4", prevision:"FONASA"},
    {hora:"14:00", especialista:"RAQUEL VILLASECA", paciente:"ANA SEPULVEDA", rut:"14.441.281-0", prevision:"ISAPRE"}
]

//Cantidad de atenciones

document.write('<h4>Cantidad de atenciones</h4>');

document.write(`<p>Cantidad de Atenciones para Radiología: ${Radiologia.length}</p>`);
document.write(`<p>Cantidad de Atenciones para Traumatología: ${Traumatologia.length}</p>`);
document.write(`<p>Cantidad de Atenciones para Dental: ${Dental.length}</p>`);

//Primeras y ultimas atenciones

document.write('<h4>Primeras y últimas atenciones</h4>');

document.write('<b>Radiología</b>');
document.write(`<p>Primera atención: ${Radiologia[0].paciente} - Rut: ${Radiologia[0].rut} - Previsión: ${Radiologia[0].prevision} <b>|</b> Ultima atención: ${Radiologia[4].paciente} - Rut: ${Radiologia[4].rut} - Previsión: ${Radiologia[4].prevision}</p>`)

document.write('<b>Traumatología</b>');
document.write(`<p>Primera atención: ${Traumatologia[0].paciente} - Rut: ${Traumatologia[0].rut} - Previsión: ${Traumatologia[0].prevision} <b>|</b> Ultima atención: ${Traumatologia[6].paciente} - Rut: ${Traumatologia[6].rut} - Previsión: ${Traumatologia[6].prevision}</p>`)

document.write('<b>Dental</b>');
document.write(`<p>Primera atención: ${Dental[0].paciente} - Rut: ${Dental[0].rut} - Previsión: ${Dental[0].prevision} <b>|</b> Ultima atención: ${Dental[5].paciente} - Rut: ${Dental[5].rut} - Previsión: ${Dental[5].prevision}</p>`)