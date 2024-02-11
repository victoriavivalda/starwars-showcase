'use client';

import { useEffect } from 'react';
import { MostVisitedItems } from '../lib/definitions';
import { saveVisitedResource } from '../lib/localStorage';

export default function TrackView(lsViewedPerson: MostVisitedItems) {
  useEffect(() => {
    saveVisitedResource(lsViewedPerson);
  }, [lsViewedPerson]);
  return null;
}
