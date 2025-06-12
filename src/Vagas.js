// src/Vagas.js
import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from './firebase';
import './Vagas.css';

export default function Vagas() {
  const [vagasObj, setVagasObj] = useState({});

  useEffect(() => {
    const vagasRef = ref(database, 'Vagas');
    onValue(vagasRef, snapshot => {
      // snapshot.val() é um objeto { Vaga1: { status }, Vaga2: { status }, … }
      setVagasObj(snapshot.val() || {});
    });
  }, []);

  // Transforma em array [{ id, status }, …] e ordena por id
  const entries = Object.entries(vagasObj).map(([id, data]) => ({
    id,
    status: data.status || 'vermelho'
  }));
  entries.sort((a, b) => a.id.localeCompare(b.id));

  // Agrupa conforme layout 7 / 6 / restante
  const top    = entries.slice(0, 7);
  const mid    = entries.slice(7, 13);
  const bottom = entries.slice(13);

  // Divide o mid em 2 linhas de até 3 vagas cada
  const midRows = [
    mid.slice(0, 3),
    mid.slice(3, 6)
  ];

  return (
    <div className="vagas-page">

      {/* Header */}
      <div className="header">
        <img src="/location-icon.png" alt="" className="location-icon" />
        <h2>Nome do local</h2>
      </div>

      {/* Top row (até 7 vagas) */}
      {top.length > 0 && (
        <div className="row top-row">
          {top.map(({ id, status }) => (
            <div key={id} className={`slot ${status}`}>
              {/* opcional: mostrar id */}
            </div>
          ))}
        </div>
      )}

      {/* Mid grid + setas */}
      {mid.length > 0 && (
        <>
          <div className="arrow-row">
            <span className="arrow">←</span>
            <span className="arrow">←</span>
            <span className="arrow">←</span>
          </div>
          <div className="mid-grid">
            {midRows.map((row, ri) => (
              <div key={ri} className="grid-row">
                {row.map(({ id, status }) => (
                  <div key={id} className={`slot ${status}`} />
                ))}
              </div>
            ))}
          </div>
          <div className="arrow-row">
            <span className="arrow">→</span>
            <span className="arrow">→</span>
            <span className="arrow">→</span>
          </div>
        </>
      )}

      {/* Bottom row (restante) */}
      {bottom.length > 0 && (
        <div className="row bottom-row">
          {bottom.map(({ id, status }) => (
            <div key={id} className={`slot ${status}`} />
          ))}
        </div>
      )}

      <hr/>

      {/* Legenda */}
      <div className="legenda">
        <div className="item">
          <span className="quad verde"></span> Vaga Disponível
        </div>
        <div className="item">
          <span className="quad vermelho"></span> Vaga Ocupada
        </div>
      </div>
    </div>
  );
}
