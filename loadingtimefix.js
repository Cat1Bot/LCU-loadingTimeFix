let _xhrOriginalOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function(_, url) {
    if (url === "/lol-lock-and-load/v1/should-wait-for-home-hubs" || url === "/lol-lock-and-load/v1/should-show-progress-bar-text") {
        let originalSend = this.send;

        this.send = function(body) {
            let originalOnReadyStateChanged = this.onreadystatechange;
            this.onreadystatechange = function(ev) {
                if (this.readyState === 4) {
                    const content = JSON.stringify(
                        false
                    );

                    Object.defineProperty(this, 'responseText', {
                        writable: true,
                        value: content
                    });

                    return originalOnReadyStateChanged.apply(this, [ev]);
                }

                return originalOnReadyStateChanged.apply(this, arguments);
            };

            originalSend.apply(this, [body]);
        };
    }

    _xhrOriginalOpen.apply(this, arguments);
};