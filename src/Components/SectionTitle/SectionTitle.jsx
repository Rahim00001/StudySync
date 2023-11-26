const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-4/12 mx-auto my-10">
            <p className="text-[#D99904] text-xl">{subHeading}</p>
            <h2 className="text-4xl border-y-4 py-2 my-3 text-[#151515]">{heading}</h2>
        </div>
    );
};

export default SectionTitle;