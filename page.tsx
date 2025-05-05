
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const checklistData = {
  "1. Documentação Geral do Projeto": [
    "PDD completo preenchido e assinado",
    "Cronograma de implementação definido",
    "Mapa georreferenciado das áreas de aplicação",
    "Lista dos lotes de biochar produzidos",
    "Plano financeiro indicando dependência dos créditos"
  ],
  "2. Elegibilidade e Origem da Biomassa": [
    "Prova de manejo sustentável da biomassa",
    "Comprovação de que a biomassa é resíduo e não causa desmatamento",
    "Documento de rastreabilidade da cadeia da biomassa"
  ],
  "3. Tecnologia e Produção de Biochar": [
    "Especificação técnica do forno Kon-Tiki",
    "Análises laboratoriais do biochar (últimos 6 meses)",
    "Registro de produção por lote (biomassa, massa seca, data, operador)",
    "Condições de armazenamento temporário (local seco e ventilado)"
  ],
  "4. MRV – Monitoramento, Reporte e Verificação": [
    "Plano de monitoramento formalizado",
    "Sistema de dados conectado ou compatível com plataforma CSYNK",
    "Relatórios de consumo de diesel e cálculo de emissões CO₂",
    "Plano de medição de CH₄ ou justificativa técnica do fator padrão (0.1 kg/t)"
  ]
};

export default function ChecklistArtisanApp() {
  const [checks, setChecks] = useState({});
  const [obs, setObs] = useState({});
  const [responsavel, setResponsavel] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('artisanChecklist');
    if (saved) {
      const parsed = JSON.parse(saved);
      setChecks(parsed.checks || {});
      setObs(parsed.obs || {});
      setResponsavel(parsed.responsavel || '');
      setData(parsed.data || '');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('artisanChecklist', JSON.stringify({ checks, obs, responsavel, data }));
  }, [checks, obs, responsavel, data]);

  const totalItems = Object.values(checklistData).flat().length;
  const checkedItems = Object.values(checks).filter(Boolean).length;
  const progress = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Checklist de Pré-Auditoria – Artisan C-Sink</h1>
      <div className="flex gap-4">
        <Input placeholder="Responsável" value={responsavel} onChange={e => setResponsavel(e.target.value)} />
        <Input placeholder="Data" value={data} onChange={e => setData(e.target.value)} />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div className="bg-green-500 h-6 rounded-full text-center text-white" style={{ width: `${progress}%` }}>{progress}%</div>
      </div>

      {Object.entries(checklistData).map(([section, items]) => (
        <Card key={section} className="border border-gray-300">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <ul className="space-y-2">
              {items.map((item, idx) => {
                const id = `${section}_${idx}`;
                return (
                  <li key={id} className="flex flex-col gap-1">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={checks[id] || false} onChange={() => setChecks({ ...checks, [id]: !checks[id] })} />
                      {item}
                    </label>
                    <Textarea placeholder="Observações" value={obs[id] || ''} onChange={e => setObs({ ...obs, [id]: e.target.value })} />
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
