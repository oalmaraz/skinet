using System.Security.Cryptography.X509Certificates;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification :BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(int id) : base (x=>x.Id == id)
        {
            AddInclude(x=>x.ProductType);
            AddInclude(x=>x.ProductBrand);   
        }
        public ProductsWithTypesAndBrandsSpecification()
        {
            AddInclude(x=>x.ProductType);
            AddInclude(x=>x.ProductBrand);
        }
        
    }
}