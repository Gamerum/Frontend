import { Card } from 'primereact/card';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface RuleListProps {
  rules: string[];
}

const RuleList: React.FC<RuleListProps> = ({ rules }) => {
  const { t } = useTranslation();
  return (
    <Card className="shadow-md text-white bg-transparent">
      <h2 className="text-xl font-bold mb-3 text-left border-b-2 border-blue-600">
        {t('rules')}
      </h2>
      <ul className="space-y-1 text-sm overflow-y-auto max-h-52 scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thumb-rounded-full">
        {rules.map((rule, index) => (
          <li key={index} className="p-1 bg-main-800 shadow-md rounded-md">
            {rule}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RuleList;
