const PartnerLogo = ({ Icon, name }) => {
  return (
    <div className="min-w-[120px] p-4 flex flex-col items-center justify-center">
      <Icon className="w-12 h-12 text-gray-600 mb-2" />
      <p className="text-sm text-gray-500 text-center">{name}</p>
    </div>
  );
};

export default PartnerLogo;