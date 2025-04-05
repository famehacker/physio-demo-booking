
const LocationMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="aspect-[2/1] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7107530793!2d72.41492855!3d23.0201119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662827000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PhysicoTech Location in Ahmedabad"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
