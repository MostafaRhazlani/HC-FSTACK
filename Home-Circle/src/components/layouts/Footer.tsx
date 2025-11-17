const footerLinks = {
  products: [
    { name: "Daret - Group Savings", href: "#" },
    { name: "Darna - Real Estate", href: "#" },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Home Circle</h3>
            <p className="text-slate-400 leading-relaxed">
              Your trusted community financial hub for group savings and real estate investment.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Home Circle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};