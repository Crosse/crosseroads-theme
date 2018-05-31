#!/bin/sh
[ -n "$1" ] || exec npm run build
exec $@
