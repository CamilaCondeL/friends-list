function Status({content, card_type}) {
  const statusClass = card_type + "__card-status";
  
    return (
      <div className="list__card-status d-inline-block">
        <span>{content}</span>
      </div>
    );
}

export default Status;