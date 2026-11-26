"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Há custos adicionais para utilizar o sistema de proteção contra fraudes?",
    answer:
      "Não. A proteção antifraude com análise inteligente e 3D Secure 2 está incluída em todas as transações, mantendo seus dados e vendas seguros automaticamente sem nenhuma cobrança extra.",
  },
  {
    question: "Qual é o prazo para análise da documentação?",
    answer:
      "A análise de documentos e validação (NIF em Portugal, DNI/NIE na Espanha ou CNPJ no Brasil) é processada em até 24 horas úteis. Em casos automáticos, a aprovação é imediata.",
  },
  {
    question: "Existe um faturamento mínimo para começar a usar a Tangerina Rebelde?",
    answer:
      "Não há faturamento mínimo. Você só paga as taxas sobre as transações que forem efetivamente aprovadas, com total transparência.",
  },
  {
    question: "Recebi um débito da Tangerina Rebelde na minha fatura. O que isso significa?",
    answer:
      "Os débitos refletem compras efetuadas em lojas ou infoprodutos que utilizam a nossa tecnologia de processamento. O descritivo oficial sempre acompanha o código do pedido.",
  },
  {
    question: "Quais formas de pagamento estão disponíveis na Tangerina Rebelde?",
    answer:
      "Aceitamos Pix instantâneo, Cartões de Crédito e Débito globais, MB WAY (push mobile em Portugal), Multibanco (Entidade e Referência SIBS), Bizum (Espanha) e transferências SEPA instantâneas.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="faq"
      className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Title */}
        <div className="flex flex-col justify-start animate-on-scroll animate">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Dúvidas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              frequentes
            </span>
          </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col gap-3 animate-on-scroll animate">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start gap-4 p-6 text-left cursor-pointer"
                >
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-400 tracking-widest font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/[0.05] text-orange-400 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-[fadeSlideIn_0.3s_ease_both]">
                    <p className="text-white/55 text-sm leading-relaxed ml-10">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
