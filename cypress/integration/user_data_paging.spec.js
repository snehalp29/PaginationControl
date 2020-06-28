/// <reference types="cypress" />

context('Users', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  describe('Happy Path', () => {
    it('should load users route by default', () => {
      cy.location('pathname').should('equal', '/users');
    });

    it('should have default title', () => {
      cy.get('[data-cy=page-title]').should('contain', 'User');
    });

    it('should display 10 rows by default', () => {
      cy.get('[data-cy=s-table-row]').should('have.length', 10);
    });

    describe('Pagination On Clicks', () => {
      it('should have 5 links by default', () => {
        cy.get('[data-cy=page-item]').should('have.length', 5);
      });
      it('should go activate a page item when clicked', () => {
        cy.get('[data-cy=page-item]').eq(3).click();

        cy.get('[data-cy=page-item]').within(() => {
          cy.get('.active').should('contain', '4');
        });
      });

      it('should go to first page when first item is clicked', () => {
        cy.get('[data-cy=first-item]').click();

        cy.get('[data-cy=page-item]').within(() => {
          cy.get('.active').should('contain', '1');
        });
      });

      it('should go to next page when next item is clicked', () => {
        cy.get('[data-cy=next-item]').click();

        cy.get('[data-cy=page-item]').within(() => {
          cy.get('.active').should('contain', '2');
        });
      });

      it('should go to last page when last item is clicked', () => {
        cy.get('[data-cy=last-item]').click();

        cy.get('[data-cy=page-item]').within(() => {
          cy.get('.active').should('contain', '20');
        });
      });
      it('should go to previous page when prvious item is clicked', () => {
        cy.get('[data-cy=last-item]').click();
        cy.get('[data-cy=prev-item]').click();
        cy.get('[data-cy=page-item]').within(() => {
          cy.get('.active').should('contain', '19');
        });
      });

      it('should change row size when different row size is selected', () => {
        cy.get('[data-cy=row-dropdown]').select('20');
        cy.get('[data-cy=s-table-row]').should('have.length', 20);
      });
    });
  });
});
