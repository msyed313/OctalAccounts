import React from "react";
import "../css/ScrollingText.css";

export default function ScrollingText() {
    return (
        <div className="moving-text-wrapper">
            <div className="moving-text">
                <span>Detail Audit Trail •</span>
                <span>Bank Reconciliation • </span>
                <span>WhatsApp & Email Integration • </span>
                <span>24/7 Expert Solutions • </span>
                <span>User-Friendly Interface • </span>
                <span>One Click Reporting • </span>

                {/* Duplicate for seamless loop */}
                <span>Detail Audit Trail •</span>
                <span>Bank Reconciliation • </span>
                <span>WhatsApp & Email Integration • </span>
                <span>24/7 Expert Solutions • </span>
                <span>User-Friendly Interface • </span>
                <span>One Click Reporting • </span>
            </div>
        </div>
    );
}
