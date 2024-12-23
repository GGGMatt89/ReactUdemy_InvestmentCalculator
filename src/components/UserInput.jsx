export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investement</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(ev) => onChange("initialInvestment", ev.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(ev) => onChange("annualInvestment", ev.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(ev) => onChange("expectedReturn", ev.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(ev) => onChange("duration", ev.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
