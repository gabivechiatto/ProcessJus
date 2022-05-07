describe('Digesto | Consulta Processos', () => {
  it('should return success in process consulting', () => {
    cy.visit('/');

    cy.get('[data-test-cy="input-process"]').type('0019600-40.2007.5.15.0124');

    cy.get('[type="submit"]').click();

    cy.intercept({
      method: 'GET',
      url: 'https://op.digesto.com.br/api/tribproc/0019600-40.2007.5.15.0124?tipo_numero=8',
    });
  });
});
