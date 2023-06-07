import React from 'react';

interface SurveyKeywordsProps {
  keywordItems: string[];
  toggleKeyword: (keyword: string) => void;
  selectedKeywords: string[];
}

const SurveyKeywords: React.FC<SurveyKeywordsProps> = ({
  keywordItems,
  toggleKeyword,
  selectedKeywords,
}) => (
  <div className="max-w-[1000px] flex flex-wrap">
    {keywordItems.map((keyword, index) => (
      <button
        key={index}
        className={`mr-2 my-2 py-1 px-2 border border-gray rounded bg-gray ${
          selectedKeywords.includes(keyword) ? 'bg-lime-600 text-white' : 'bg-gray-200'
        }`}
        onClick={() => toggleKeyword(keyword)}
      >
        {keyword}
      </button>
    ))}
  </div>
);

export default SurveyKeywords;
