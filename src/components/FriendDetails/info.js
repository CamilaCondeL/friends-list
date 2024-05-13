function Info(props) {
    return (
        <div className="detail__card-infoComponent d-flex flex-column">
            <div className="detail__card-infoComponent--bio">
                <span>Bio:</span>
                <p className="mb-0">{props.bio}</p>
            </div>

            <hr />

            <div className="detail__card-infoComponent--phone d-flex">
                <span className="w-50">Phone:</span>
                <p className="mb-0">{props.phone}</p>
            </div>

            <hr />

            <div className="detail__card-infoComponent--addressData">
                <div className="d-flex">
                    <span className="w-50">Address:</span>
                    <p className="mb-0">{props.address_1}</p>
                </div>
                <div className="d-flex">
                    <span className="w-50">City:</span>
                    <p className="mb-0">{props.city}</p>
                </div>
                <div className="d-flex">
                    <span className="w-50">State:</span>
                    <p className="mb-0">{props.state}</p>
                </div>
                <div className="d-flex">
                    <span className="w-50">Zipcode:</span>
                    <p className="mb-0">{props.zipcode}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;