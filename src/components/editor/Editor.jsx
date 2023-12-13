const Editor = () => {
    // handle add categorize 
    const addCategorize = () => {
        console.log("categorize added");
    }

    // handle add cloze 
    const addCloze = () => {
        console.log("cloze added");
    }

    // handle add comprehension 
    const addComprehension = () => {
        console.log("comprehension added");
    }
    
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl font-orbitron text-center mx-auto w-fit">
        Craft Your Form
      </h1>
      <div className="w-full flex flex-col items-center py-10">
        {/* header image */}
        <h2 className="w-full text-left font-bold text-xl py-4">
          Add Header Image:
        </h2>
        <input
          type="file"
          className="file-input file-input-bordered file-input-accent w-full"
        />
        {/* add buttons */}
        <h2 className="font-bold text-xl py-4">
          Add To Form
        </h2>
        <div className="join">
          <button onClick={addCategorize} className="btn btn-outline btn-accent text-center join-item min-w-[110px]">Categorize</button>
          <button onClick={addComprehension} className="btn btn-outline btn-accent text-center join-item">Comprehension</button>
          <button onClick={addCloze} className="btn btn-outline btn-accent text-center join-item min-w-[100px]">Cloze</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
