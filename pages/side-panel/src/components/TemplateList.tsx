/* eslint-disable react/prop-types */
interface Template {
  id: string;
  title: string;
  content: string;
}

interface TemplateListProps {
  templates: Template[];
  onTemplateSelect: (content: string) => void;
  isDarkMode?: boolean;
}

const TemplateList: React.FC<TemplateListProps> = ({ templates, onTemplateSelect, isDarkMode = false }) => {
  return (
    <div className="p-4 animate-slideUp">
      <h3 className={`mb-4 text-base font-semibold ${isDarkMode ? 'text-white' : 'text-bem-primary'}`}>Quick Start</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {templates.map(template => (
          <button
            type="button"
            key={template.id}
            onClick={() => onTemplateSelect(template.content)}
            className={`rounded-xl p-4 text-left transition-all ${
              isDarkMode ? 'bg-bem-dark/80 text-gray-100 hover:bg-bem-dark/60' : 'bg-white/80 text-gray-800 hover:bg-white'
            } border ${isDarkMode ? 'border-bem-primary/20' : 'border-bem-primary/10'} shadow-bem hover:shadow-bem-md hover:scale-[1.02]`}>
            <div className="text-sm font-medium">
              <span className={isDarkMode ? 'text-bem-accent' : 'text-bem-secondary'}>{template.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
