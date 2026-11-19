
/*
Nombre completo: Valerie Sofia Parra Artunduaga
Grupo: Grupo 1
Problema: Aportes a seguridad social de un contratista por Orden de Prestación de Servicios (OPS)
*/

// CONSTANTES
const SMMLV = 1750000;
const PORCENTAJE_IBC = 0.40;
const PORCENTAJE_SALUD = 0.125;
const PORCENTAJE_PENSION = 0.16;
const PORCENTAJE_SOLIDARIDAD = 0.01;

const RIESGO_1 = 0.00522;
const RIESGO_2 = 0.01044;
const RIESGO_3 = 0.02436;

const IBC_MINIMO = SMMLV;
const IBC_MAXIMO = SMMLV * 25;
const LIMITE_SOLIDARIDAD = SMMLV * 4;

// ENTRADAS
let honorarios = Number(prompt("Ingrese el valor mensual de los honorarios:"));
let riesgo = Number(prompt("Ingrese el nivel de riesgo ARL (1, 2 o 3):"));

// VALIDACIONES
if (honorarios <= 0 || !Number.isFinite(honorarios)) {

    alert("Honorarios no válidos, por favor ingrese un valor válido");

} else if (riesgo !== 1 && riesgo !== 2 && riesgo !== 3) {

    alert("Nivel de riesgo no válido, por favor ingrese un nivel válido: 1, 2 o 3");

} else {

    // CALCULAR IBC
    let ibc = honorarios * PORCENTAJE_IBC;

    if (ibc < IBC_MINIMO) {
        ibc = IBC_MINIMO;
    } else if (ibc > IBC_MAXIMO) {
        ibc = IBC_MAXIMO;
    }

    // CALCULAR SALUD
    let salud = ibc * PORCENTAJE_SALUD;

    // CALCULAR PENSIÓN
    let pension = ibc * PORCENTAJE_PENSION;

    // CALCULAR FONDO DE SOLIDARIDAD
    let solidaridad = 0;

    if (ibc >= LIMITE_SOLIDARIDAD) {
        solidaridad = ibc * PORCENTAJE_SOLIDARIDAD;
    }

    // CALCULAR ARL
    let arl = 0;

    if (riesgo === 1) {
        arl = ibc * RIESGO_1;
    } else if (riesgo === 2) {
        arl = ibc * RIESGO_2;
    } else if (riesgo === 3) {
        arl = ibc * RIESGO_3;
    }

    // CALCULAR TOTAL DE APORTES
    let totalAportes = salud + pension + solidaridad + arl;

    // CALCULAR NETO DEL CONTRATISTA
    let neto = honorarios - totalAportes;

    // MOSTRAR RESULTADOS
    alert(
        "RESULTADOS DE SEGURIDAD SOCIAL OPS\n\n" +
        "Honorarios: " + honorarios.toLocaleString("es-CO") + "\n" +
        "IBC: " + ibc.toLocaleString("es-CO") + "\n" +
        "Salud: " + salud.toLocaleString("es-CO") + "\n" +
        "Pensión: " + pension.toLocaleString("es-CO") + "\n" +
        "Fondo de solidaridad: " + solidaridad.toLocaleString("es-CO") + "\n" +
        "ARL: " + arl.toLocaleString("es-CO") + "\n" +
        "Total de aportes: " + totalAportes.toLocaleString("es-CO") + "\n" +
        "Neto del contratista: " + neto.toLocaleString("es-CO")
    );
}