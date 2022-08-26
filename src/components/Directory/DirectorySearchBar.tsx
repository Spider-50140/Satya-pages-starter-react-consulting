import search from "src/assets/images/search.svg";

interface DirectorySearchBarProps {
  placeholder: string
  queryParameter: string
  searcherPath: string
  formId: string
  inputId: string
  labelText: string
}

export function DirectorySearchBar(props: DirectorySearchBarProps) {
  const { placeholder, searcherPath, queryParameter, formId, inputId, labelText } = props;
  return (
    <form className="text-center" method="get" id={formId} action={searcherPath}>
      <div className="inline-flex bg-white border border-brand-gray-300 w-full sm:w-auto">
        <label className="search-label sr-only" htmlFor={inputId}>{labelText}</label>
        <input placeholder={placeholder}
              className="search-input p-4 text-sm"
              type={"text"}
              name={queryParameter}
              id={inputId}
              >
        </input>
        <button className="search-submit w-12 flex items-center justify-center" type="submit">
          <img className="search-submitbutton" src={search} alt=""></img>
          <span className="sr-only">Search</span>
        </button>
        {/* // TODO: implement geolocation */}
      </div>
    </form>
  )
}
