import { Component } from "react";

export default function Button({ onClick }) {
    return (
        <Button type="button" onClick={onClick}>
            Load More
        </Button>
    )
}
