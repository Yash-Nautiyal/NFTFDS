const SelectionForm = ({
  selectedState,
  selectedDistrict,
  selectedSchool,
  selectedCategory,
  states,
  districts,
  schools,
  categories,
  onStateSelect,
  onDistrictSelect,
  onSchoolSelect,
  onCategorySelect,
}) => {
  const renderSelect = ({ label, value, options, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[var(--color-text)] mb-1 font-outfit">
        {label}
      </label>
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-[var(--color-border)] bg-[var(--color-surface)] 
                 text-[var(--color-text)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] 
                 focus:border-transparent font-redhat theme-transition"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "string" ? option : option.id}
          >
            {typeof option === "string" ? option : option.name}
          </option>
        ))}
      </select>
    </div>
  );
  return (
    <div className="bg-[var(--color-surface)] rounded-xl shadow-sm p-6 theme-transition">
      {renderSelect({
        label: "Select State",
        value: selectedState,
        options: states,
        onChange: onStateSelect,
        placeholder: "Choose a state",
      })}
      {selectedState &&
        renderSelect({
          label: "Select District",
          value: selectedDistrict,
          options: districts,
          onChange: onDistrictSelect,
          placeholder: "Choose a district",
        })}
      {selectedDistrict &&
        renderSelect({
          label: "Select School",
          value: selectedSchool,
          options: schools,
          onChange: onSchoolSelect,
          placeholder: "Choose a school",
        })}
      {selectedSchool &&
        renderSelect({
          label: "Select Category",
          value: selectedCategory,
          options: categories,
          onChange: onCategorySelect,
          placeholder: "Choose a category",
        })}
    </div>
  );
};

export default SelectionForm;
