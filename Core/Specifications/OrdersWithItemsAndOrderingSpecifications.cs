using System.ComponentModel;
using Core.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;

namespace Core.Specifications
{
    public class OrdersWithItemsAndOrderingSpecifications : BaseSpecification<Order>
    {
        public OrdersWithItemsAndOrderingSpecifications(string email) : base(o => o.BuyerEmail == 
        email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescencding(o => o.OrderDate);
        }

        public OrdersWithItemsAndOrderingSpecifications(int id, string email) 
        : base( o => o.Id == id && o.BuyerEmail == email)
        {
        }
    }
}