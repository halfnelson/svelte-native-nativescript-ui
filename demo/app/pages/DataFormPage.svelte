<page>
    <actionBar title="RadDataForm Markup" />
    <radDataForm source={ticket} metadata={ticketMetadata}>
        <entityProperty prop:properties name="movie" displayName="Movie Name" index="0" converter={movieConverter}
            valuesProvider={movieNames}>
            <propertyEditor prop:editor type="Picker" />
        </entityProperty>
        <entityProperty prop:properties name="date" index="1">
            <propertyEditor prop:editor type="DatePicker" />
        </entityProperty>

        <entityProperty prop:properties name="time" index="2">
            <propertyEditor prop:editor type="TimePicker" />
        </entityProperty>
        <entityProperty prop:properties name="type" displayName="Type" index="3" valuesProvider="2D, 3D">
            <propertyEditor prop:editor type="SegmentedEditor" />
        </entityProperty>
        <entityProperty prop:properties name="price" index="4" readOnly="true">
            <propertyEditor prop:editor type="Decimal" />
        </entityProperty>
        <entityProperty prop:properties name="numberOfTickets" displayName="Number of Tickets" index="5">
            <propertyEditor prop:editor type="Stepper">
                <propertyEditorParams prop:params minimum="0" maximum="100" step="2" />
            </propertyEditor>
        </entityProperty>
        <entityProperty prop:properties name="contactName" displayName="Contact Name" index="6">
            <propertyEditor prop:editor type="Text" />
        </entityProperty>
        <entityProperty prop:properties name="contactPhone" displayName="Contact Phone" index="7">
            <propertyEditor prop:editor type="Phone" />
        </entityProperty>
        <entityProperty prop:properties name="contactEmail" displayName="Contact Email" index="8">
            <propertyEditor prop:editor type="Email" />
        </entityProperty>
        <entityProperty prop:properties name="agreeTerms" displayName="I Agree with Terms" index="9">
            <propertyEditor prop:editor type="Switch" />
        </entityProperty>
    </radDataForm>
</page>

<script>

    let ticketMetadata = {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
    }

    let ticket = {
        movie: 123,
        date: '2016-04-06',
        time: '20:00',
        type: '2D',
        price:  9.50,
        numberOfTickets: 2,
        contactName: null,
        contactPhone:  null,
        contactEmail: null,
        agreeTerms: false
    }

  
    let movies = [
        { id: 123, name: 'Zootopia' },
        { id: 217, name: 'Captain America' },
        { id: 324, name: 'The Jungle Book' }
    ]

    let movieNames = movies.map((value) => value.name);


    class MovieConverter  {
        constructor(movies) { 
            this._movies = movies
        }

        convertFrom(id) {
            return this._movies.filter((movie) => movie.id === id)[0].name;
        }

        convertTo(name) {
            return this._movies.filter((movie) => movie.name === name)[0].id;
        }
    }

    let movieConverter = new MovieConverter(movies);

</script>