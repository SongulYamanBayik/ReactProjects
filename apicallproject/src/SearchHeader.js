import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault(); //enter sonrası yenilemeyi kapatır.
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
        {/*sadece value değeri vermek yetmiyor. usestate de boş bıraktığımız için inputa tıklama işlemi yapılamıyor. */}
      </form>
    </div>
  );
}

export default SearchHeader;
