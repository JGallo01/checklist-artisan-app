
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Checklist de Pré-Auditoria – Artisan C-Sink</h1>
      <Card>
        <CardContent>
          <p>Preencha o item:</p>
          <Input placeholder="Responsável" />
          <Textarea placeholder="Observações" />
          <Button onClick={() => alert('Enviado!')}>Enviar</Button>
        </CardContent>
      </Card>
    </main>
  );
}
