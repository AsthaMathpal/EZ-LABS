function Features() {
  return (
    <section id="features" className="py-20 container mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
          <p>Looks great on all screen sizes, mobile, tablet, and desktop.</p>
        </div>
        <div className="p-6 border rounded shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Fast Performance</h4>
          <p>Optimized for speed and smooth user experience.</p>
        </div>
        <div className="p-6 border rounded shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">API Integration</h4>
          <p>Contact form connected to backend API seamlessly.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
