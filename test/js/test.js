var expect = chai.expect;
chai.should();  

describe('Pruebas ejemplo 1', () => {

 beforeEach (function () {
  
     medicamento = new Medicamento("Augmentine '125' (125/31,25 mg/5 ml)",8,40,5,3,25,"0800");
    
  });

  it('calcularDosisDia', () => {
    medicamento.calcularDosisDia().should.equal(320);
  });
    it('calcularDosisMg', () => {
    medicamento.calcularDosisMg().should.equal(106.67);
  });
  it('calcularDosisMl', () => {
    medicamento.calcularDosisMl().should.equal(4.27);
  });
  it('administrarDosis', () => {
    medicamento.administrarDosis();
    var sHoraSiguienteDosis = "0000"; // debería ser la hora actual más las horas de la siguiente dosis
    medicamento.repartir.should.equal(sHoraSiguienteDosis);
  });
});

describe('Pruebas ejemplo 2', () => {

 beforeEach (function () {
  
     medicamento = new Medicamento("Augmentine 100  (100 mg/1 ml)",8,40,5,3,100,"2230");
    
  });

  it('calcularDosisDia', () => {
    medicamento.calcularDosisDia().should.equal(320);
  });
    it('calcularDosisMg', () => {
    medicamento.calcularDosisMg().should.equal(106.67);
  });
  it('calcularDosisMl', () => {
    medicamento.calcularDosisMl().should.equal(1.07);
  });
  it('administrarDosis', () => {
    medicamento.administrarDosis();
    var sHoraSiguienteDosis = "0000"; // debería ser la hora actual más las horas de la siguiente dosis
    medicamento.repartir.should.equal(sHoraSiguienteDosis);
  });
});








