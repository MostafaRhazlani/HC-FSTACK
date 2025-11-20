import ProductCard from "../../UI/ProductCard";

const Products = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Choose Your Path to Financial Growth
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're saving with your community or investing in real estate, 
            we've got you covered.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ProductCard
            logo="/src/assets/logos/daret-logo.png"
            title="Daret: Secure Group Contribution"
            description="Join trusted circles for group savings. Track contributions, manage payouts, and build financial security with your community through our transparent tontine system."
            ctaText="Go to Daret"
            accentColor="indigo"
            targetUri="http://localhost:3001/"
          />
          <ProductCard
            logo="/src/assets/logos/darna-logo.png"
            title="Darna: Real Estate Listings & Financing"
            description="Browse verified property listings, access investment tools, and secure financing options. Turn your savings into real estate opportunities with confidence."
            ctaText="Go to Darna"
            accentColor="teal"
            targetUri="http://localhost:3002/"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;